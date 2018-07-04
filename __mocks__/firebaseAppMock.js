import firebaseMocks from './firebaseMocks'

export default {
  database: () => {
    return {
      ref: function () {
        return {
          update: firebaseMocks.update
        }
      }
    }
  }
}