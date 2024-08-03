import { SignIn, useUser } from '@clerk/nextjs'
import { auth, currentUser } from '@clerk/nextjs/server';

export default async function Page() {
    const {user} =  useUser();

    // useEffect(() => {
    //     if (user) {
    //         fetch('/api/clerk-webhook', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 id: ,
    //                 email_addresses:,
    //                 first_name:,
    //                 image_url:
    //             }),
    //         });
    //     }
    // }, [user]);
    console.log("User id  instance : 👀👀👀👀", user);

    return <SignIn />
}
