// Utils
import { createThemedStyles } from '../../utils/createThemedStyles'

const styles = createThemedStyles({
  listItemContainer: {
    width: '100%',
    backgroundColor: 'mainBackgroundColor',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 'S',
    borderBottomWidth: 1,
    borderBottomColor: 'listItemBorderColor',
  },
  title: {
    color: 'listItemTitleTextColor',
  },
  time: {
    color: 'listItemTimeColor',
    marginRight: 'XS',
  },
  number: {
    color: 'listItemNumberColor',
  },
  numberCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 'rounded',
    borderWidth: 1,
    borderColor: 'listItemNumberCircleColor',
  },
  body: {
    color: 'listItemBodyTextColor',
  },
  metaDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default styles
