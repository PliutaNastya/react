import useOnlineStatus from './useOnlineStatus'
function NetworkStatusIndicator() {
  const onlineStatus = useOnlineStatus()

  return <p>You are currently: {onlineStatus ? 'Online' : 'Offline'}</p>
}

export default NetworkStatusIndicator
