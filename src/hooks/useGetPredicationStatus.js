import { ACTIVE_STATUS, INACTIVE_STATUS } from '@/constants/status-constants'

const predicationsStatusList = {
  active: Symbol(ACTIVE_STATUS),
  inactive: Symbol(INACTIVE_STATUS)
}

export const useGetPredicationStatus = (
  predicationStatus = predicationsStatusList.active.description
) => {
  let status

  switch (predicationStatus) {
    case predicationsStatusList.active.description:
      status = 'Да'
      break
    case predicationsStatusList.inactive.description:
      status = 'Нет'
      break
    default:
      status = 'Н/А'
  }

  return status
}
