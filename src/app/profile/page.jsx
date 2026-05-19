

import ModelUpdateUser from '@/components/ModelUpdateUser';
import { auth } from '@/lib/auth';
import { authClient } from '@/lib/auth-clients';
import { headers } from 'next/headers';
import Image from 'next/image';


const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    return (
        <div className="flex justify-center mt-6 px-4">

            <div className="w-full max-w-md rounded-3xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-xl p-6">


                <div className="flex flex-col items-center text-center">

                    <Image
                        src={session?.user?.image || "user image"}
                        alt={session?.user?.name || "User"}
                        width={110}
                        height={110}
                        className="rounded-2xl object-cover border-4 border-white dark:border-white/10 shadow-lg"
                    />

                    <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                        {session?.user?.name}
                    </h2>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {session?.user?.email}
                    </p>
                </div>

                <div className="my-5 border-t border-gray-200 dark:border-white/10"></div>




                <div className="flex justify-center">
                    <ModelUpdateUser session={session}></ModelUpdateUser>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;