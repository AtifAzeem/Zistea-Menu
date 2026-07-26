import { supabase } from "../lib/supabase";

export async function getMenu() {

    const [
        categoriesRes,
        itemsRes,
        variantsRes,
        addonsRes,
        categoryAddonsRes
    ] = await Promise.all([

        supabase
            .from("categories")
            .select("*")
            .order("display_order"),

        supabase
            .from("items")
            .select("*")
            .order("display_order"),

        supabase
            .from("variants")
            .select("*")
            .order("display_order"),

        supabase
            .from("addons")
            .select("*"),

        supabase
            .from("category_addons")
            .select("*")
    ]);

    if (
        categoriesRes.error ||
        itemsRes.error ||
        variantsRes.error ||
        addonsRes.error ||
        categoryAddonsRes.error
    ) {
        throw new Error("Failed to fetch menu");
    }

    const variantsByItem = new Map();

    for (const variant of variantsRes.data) {

        if (!variantsByItem.has(variant.item_id)) {
            variantsByItem.set(variant.item_id, []);
        }

        variantsByItem.get(variant.item_id).push({
            id: variant.id,
            name: variant.name,
            price: variant.price,
        });
    }
    const addonMap = new Map();

    for (const addon of addonsRes.data) {
        addonMap.set(addon.id, addon);
    }

    const addonsByCategory = new Map();

    for (const row of categoryAddonsRes.data) {

        if (!addonsByCategory.has(row.category_id)) {
            addonsByCategory.set(row.category_id, []);
        }

        addonsByCategory.get(row.category_id).push(
            addonMap.get(row.addon_id)
        );
    }
    
    const itemsByCategory = new Map();

    for (const item of itemsRes.data) {

        if (!itemsByCategory.has(item.category_id)) {
            itemsByCategory.set(item.category_id, []);
        }

        const itemVariants = variantsByItem.get(item.id) || [];
        const itemAddons = addonsByCategory.get(item.category_id) || [];

        itemsByCategory.get(item.category_id).push({

            id: item.id,
            name: item.name,
            description: item.description,
            image: item.image,
            veg: item.veg,
            available: item.available,
            recommended: item.recommended,
            popular: item.popular,

            variants: itemVariants,
            addons: itemAddons,

            hasVariants: itemVariants.length > 1,
            hasAddons: itemAddons.length > 0,
            baseVariant: itemVariants[0] ?? null,
        });

    }


    const menu = {
        categories: categoriesRes.data.map(category => ({

            id: category.id,
            name: category.name,

            items: itemsByCategory.get(category.id) || []

        }))
    };

    return menu;
}