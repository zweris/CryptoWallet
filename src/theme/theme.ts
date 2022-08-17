import {StyleSheet} from 'react-native';
import {AppColors} from './appColors';

export const Theme = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: AppColors.white,
    paddingLeft: 20,
    paddingRight: 20,
  },
  containerMargin: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
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
  title: {
    fontSize: 30,
    flex: 1,
    color: AppColors.dark,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    fontWeight: '900',
  },

  tutorialTitle: {
    fontSize: 22,
    marginBottom: 10,
    color: AppColors.black,
    textAlign: 'center',
  },
  secondaryTitle: {
    fontSize: 15,
    color: AppColors.primary,
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  description: {
    fontSize: 15,
    color: AppColors.primary,
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: AppColors.lightGray,
    color: AppColors.black,
    height: 80,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: AppColors.primary,
    paddingLeft: 5,
    paddingRight: 5,
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  primaryColor: {
    color: AppColors.primary,
  },
  textInputError: {
    color: AppColors.error,
    borderBottomColor: AppColors.error,
  },
  button: {
    backgroundColor: AppColors.primary,
    maxHeight: 80,
    justifyContent: 'center',
    fontSize: 20,
    color: AppColors.white,
    textTransform: 'uppercase',
  },
  buttonText: {
    fontSize: 20,
    color: AppColors.black,
    maxHeight: 40,
  },
  appendOneMinuteButton: {
    backgroundColor: '#b2e1e1',
    height: 40,
    width: 188,
    justifyContent: 'center',
    borderRadius: 15,
  },
  cancelledSessionButton: {
    backgroundColor: '#fff',
    height: 70,
    borderWidth: 5,
    borderColor: AppColors.primary,
    borderRadius: 15,
  },
  connectButton: {
    backgroundColor: AppColors.primary,
    height: 40,
    width: 188,
    justifyContent: 'center',
    borderRadius: 15,
  },
  authenticationProviderContainer: {
    height: 60,
    marginTop: 10,
    marginBottom: 10,
  },
  separator: {
    height: 20,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.lightGray,
    opacity: 0.8,
  },
  wave: {
    height: 75,
  },
  timerTime: {
    fontSize: 20,
    fontWeight: '900',
    color: '#010643',
  },
  timerText: {
    fontSize: 10,
    color: '#010643',
  },
  buttonStop: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 80,
    height: 80,
  },
  mainTabIconContainer: {
    backgroundColor: AppColors.primary,
    borderRadius: 20,
    margin: 5,
  },
  incrementDecrementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: AppColors.primary,
    padding: 5,
    borderRadius: 20,
  },
  incrementDecrementButtonContainer: {
    backgroundColor: AppColors.primary,
    width: '15%',
    alignItems: 'center',
  },
  incrementDecremenValueContainer: {
    backgroundColor: AppColors.white,
    width: '30%',
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
  },
  incrementDecremenValue: {
    fontSize: 20,
    fontWeight: '900',
    color: '#010643',
  },
  incrementDecremenValueText: {
    fontSize: 10,
    color: '#010643',
  },
  incrementDecremenButton: {
    width: '100%',
  },
  incrementDecremenButtonHitArea: {
    height: '200%',
    width: '200%',
    position: 'absolute',
    top: '-50%',
  },
  incrementDecremenButtonHitAreaLeft: {
    right: 0,
  },
  incrementDecremenButtonHitAreaRight: {
    left: 0,
  },
  incrementDecremenButtonText: {
    fontSize: 30,
    color: AppColors.white,
    textAlign: 'center',
  },
  slider: {
    height: 40,
    width: '100%',
  },
  mainTabBar: {
    backgroundColor: AppColors.mainTabBarGray,
    flexDirection: 'row',
    justifyContent: 'center',
    height: '5%',
  },
  whiteBackground: {
    backgroundColor: AppColors.white,
  },
  logout: {
    color: AppColors.red,
  },
  url: {
    color: AppColors.url,
    fontWeight: '900',
  },
  email: {
    color: AppColors.email,
    fontWeight: '900',
  },

  stackHeaderContainer: {
    backgroundColor: 'white',
  },
  stackHeaderBackContainer: {
    position: 'absolute',
    left: 0,
    height: '100%',
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stackHeaderBack: {
    height: '50%',
  },
  stackHeaderTitle: {
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'center',
  },
});
