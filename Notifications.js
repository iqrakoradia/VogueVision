import { useContext } from 'react';
import { NotificationContext } from '../contexts/NotificationContext';

const Notification = () => {
    const { notifications } = useContext(NotificationContext);

    return (
        <div className="fixed top-4 right-4 w-64 bg-white shadow-lg rounded-lg p-4">
            <h2 className="font-bold mb-2">Notifications</h2>
            {notifications.length === 0 ? (
                <p>No new notifications</p>
            ) : (
                <ul>
                    {notifications.map((notif) => (
                        <li key={notif.id} className="p-2 border-b">{notif.message}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Notification;
