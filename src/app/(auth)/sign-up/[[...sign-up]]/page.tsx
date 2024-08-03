import { SignUp, useUser } from '@clerk/nextjs'
import { useEffect } from 'react'

export default function Page() {
    const { user } = useUser();

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
    console.log("User instance : 👀👀👀👀" , user)
    return <SignUp />
}
