export default async function UserProfile({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h1 className="text-xl mb-4">Profile</h1>

            <p className="text-4xl flex items-center gap-2">
                Profile page
                <span className="px-3 py-1 rounded-lg bg-orange-500 text-white font-semibold">
                    {id}
                </span>
            </p>
        </div>
    );
}