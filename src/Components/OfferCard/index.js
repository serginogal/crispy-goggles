import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Pill from '../Pill';

const { height, width } = Dimensions.get('window')

const OfferCard = ({ brand, title, subtitle_short, subtitle_long, data, ...item }) => {

  let logo = (() => {
    switch (brand) {
      case 'mcd':
        return require('../../Assets/Images/brand_logos/macdonalds-logo.png')
      case 'hm':
        return require('../../Assets/Images/brand_logos/hm-logo.png')
      case 'nk':
        return require('../../Assets/Images/brand_logos/nike-logo.png')
      case 'bk':
        return require('../../Assets/Images/brand_logos/bk-logo.png')
      default:
        break
    }
  })();

  return (
    <TouchableOpacity activeOpacity={.8} style={styles.cardWrapper}>
      <View style={styles.contentWrapper}>
        <View style={styles.logoImgWrapper} >
          <Image source={logo} style={styles.logoImg} resizeMode={'contain'} />
        </View>
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle_short}</Text>
          <View style={styles.pillsWrapper}>
            <Pill type={'rating'} {...{data}} />
            <Pill type={'category'} {...{data}} />
            <Pill type={'days'} {...{data}} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default OfferCard

const styles = StyleSheet.create({
  cardWrapper: {
    height: 120,
    width: width * 0.9,
    marginVertical: 5,
    borderColor: '#71828A55',
    borderWidth: .5,
    borderRadius: 20
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoImgWrapper: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImg: {
    height: '35%',
    width: '45%'
  },
  rightWrapper: {
    width: '70%',
    height: '65%',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    fontWeight: '600'
  },
  subtitle: {
    fontSize: 15,
    opacity: .3
  },
  pillsWrapper: {
    flexDirection: 'row',
    // width: '90%',
    // justifyContent: 'space-between'
  }
})