import styled from 'styled-components'
import { 
  View as RNView, 
  Text as RNText, 
  Platform, 
  StatusBar
} from 'react-native'

function getStatusBarHeight() {
  return Platform.OS === "android" ? StatusBar.currentHeight : 0;
}

export const View = styled(RNView)`
  padding-top: ${getStatusBarHeight}px;
`

export const Text = styled(RNText)`
  
`