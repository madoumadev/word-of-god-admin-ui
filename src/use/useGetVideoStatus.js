import { ACTIVE_STATUS, INACTIVE_STATUS } from '@/constants/status-constants'

const videoStatusList = {
  active: Symbol(ACTIVE_STATUS),
  inactive: Symbol(INACTIVE_STATUS)
}

export const useGetVideoStatus = (videoStatus = videoStatusList.active.description) => {
  let status

  switch (videoStatus) {
    case videoStatusList.active.description:
      status = 'Да'
      break
    case videoStatusList.inactive.description:
      status = 'Нет'
      break
    default:
      status = 'Н/А'
  }

  return status
}
