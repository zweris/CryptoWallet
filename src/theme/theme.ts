import {StyleSheet} from 'react-native';
import {AppColors} from './appColors';

export const Theme = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: AppColors.white,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 50,
  },
  containerMargin: {
    marginLeft: 16,
    marginRight: 16,
  },
  flex: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  flex6: {
    flex: 6,
  },
  flex7: {
    flex: 7,
  },
  flex8: {
    flex: 8,
  },
  flex9: {
    flex: 9,
  },
  flex10: {
    flex: 10,
  },
  flex12: {
    flex: 12,
  },
  flex15: {
    flex: 15,
  },
  flex20: {
    flex: 20,
  },
  flex25: {
    flex: 25,
  },
  flex30: {
    flex: 30,
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexCenteredRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flexSpaceEvenlyRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  flexSpaceBetweenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  height5pct: {
    height: '5%',
  },
  height10pct: {
    height: '10%',
  },
  height15pct: {
    height: '15%',
  },
  height20pct: {
    height: '20%',
  },
  height25pct: {
    height: '25%',
  },
  height30pct: {
    height: '30%',
  },
  height100pct: {
    height: '100%',
  },
  width5pct: {
    width: '5%',
  },
  width10pct: {
    width: '10%',
  },
  width15pct: {
    width: '15%',
  },
  width20pct: {
    width: '20%',
  },
  width25pct: {
    width: '25%',
  },
  width30pct: {
    width: '30%',
  },
  width35pct: {
    width: '35%',
  },
  width40pct: {
    width: '40%',
  },
  width90pct: {
    width: '90%',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  justifyContentFlexStart: {
    justifyContent: 'flex-start',
  },
  justifyContentFlexEnd: {
    justifyContent: 'flex-end',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  appBackground: {
    backgroundColor: AppColors.background,
  },
  titleTotal: {
    color: AppColors.black,
    fontFamily: 'Red Hat Text',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titleAmount: {
    color: AppColors.blue,
    fontFamily: 'Red Hat Text',
    fontSize: 32,
    fontWeight: 'bold',
  },
  titleTotalCurrency: {
    color: AppColors.blue,
    fontFamily: 'Red Hat Text',
    fontSize: 20,
    textAlignVertical: 'center',
  },
});
