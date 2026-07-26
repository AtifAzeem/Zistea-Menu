function RestoreCartModal({
    onRestore,
    onStartNew,
}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl p-6 w-[90%] max-w-sm shadow-xl">

                <h2 className="text-xl font-bold mb-2">
                    Restore Previous Order?
                </h2>

                <p className="text-gray-600 mb-6">
                    We found an unfinished order from your previous visit.
                </p>

                <div className="flex justify-end gap-3">

                    <button
                        onClick={onStartNew}
                        className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50"
                    >
                        Start New
                    </button>

                    <button
                        onClick={onRestore}
                        className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-800"
                    >
                        Restore
                    </button>

                </div>

            </div>
        </div>
    );
}

export default RestoreCartModal;