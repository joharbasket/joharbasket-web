import { getNotification } from "@/db/firebase";
import SendNotificationBtn from "./SendNotificationBtn";
type Notification = {
    author: {
      email: string;
      name: string;
    };
    date: string;
    message: {
      body: string;
      title: string;
    };
  };

function Card({ notification }: { notification: Notification }) {
    return (
        <div className='rounded-md shadow-sm shadow-slate-300 px-4 py-2'>
            <div>
                <span> Title</span> : {notification?.message?.title}
            </div>
            <div>
                <span> Body</span> : {notification?.message?.body}
            </div>
            <div>
                <span> Author</span> : {notification?.author?.name}
            </div>
            <div>
                <span> At </span> : {notification?.date}
            </div>
        </div>
    )
}

export default async function  Notifications() {
    const notifications = await getNotification();
    return (
        <div className="bg-white text-black rounded-md shadow-md shadow-slate-900 p-4 divide-y-8 divide-white">
            <h2 className="text-5xl font-bold">Notifications</h2>
            <div className='flex items-center gap-3'>
                <span className='text-xl'>Send a notification</span>
                <SendNotificationBtn/>
            </div>
            <div>
                <span className='text-xl'>Past Notifications</span>
                <div>
                    {
                        notifications.length > 0 ? <div className='flex flex-col gap-5 mt-3'>
                            {
                                notifications.map((notification: Notification, i) => <Card key={i} notification={notification} />
                                )
                            }
                        </div> : <div>nhi hai</div>
                    }
                </div>
            </div>
        </div>
    )
}
