import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 35,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#272727',
    paddingVertical: 17,
    ...Platform.select({
      android: {
        marginBottom: 20,
      },
    }),
  },
  textBtn: { color: '#FFFFFF', fontSize: 16, lineHeight: 19, fontWeight: '600' },
});
