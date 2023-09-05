import { GAS_WIDGET, OIL_WIDGET } from '@/constants/widget-constants'

const widgetsList = {
  oil: Symbol(OIL_WIDGET),
  gas: Symbol(GAS_WIDGET)
}

export const useGetWidget = (orderStatus = widgetsList.oil.description) => {
  let status

  switch (orderStatus) {
    case widgetsList.oil.description:
      status = 'Нефть'
      break
    case widgetsList.gas.description:
      status = 'Газ'
      break
    default:
      status = 'None'
  }

  return status
}
