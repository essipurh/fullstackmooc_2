const Notification = ({ notification} ) => {
  if (!notification) { return null }
  return (
    <div className={notification.type}>{notification.text}</div>
  )
}

export default Notification