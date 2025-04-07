import { useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext';

const NotificationPage = () => {
    const { notifications } = useContext(NotificationContext);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">All Notifications</h1>
            {notifications.length === 0 ? (
                <p>No notifications yet.</p>
            ) : (
                <ul className="list-disc pl-5">
                    {notifications.map((notif) => (
                        <li key={notif.id} className="p-2 border-b">{notif.message}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NotificationPage;
