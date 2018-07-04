import mutations from '~/store/mutations'

describe('mutations', () => {
  describe('setWorkingPomodoro', () => {
    it('should set the workingPomodoro property to 25', () => {
      let state = {config: {workingPomodoro: 1}}
      mutations.setWorkingPomodoro(state, 25)
      expect(state.config).toEqual({workingPomodoro: 25})
    })
  }),
  describe('setShortBreak', () => {
    it('should set the shortBreak property to 5', () => {
      let state = {config: {shortBreak: 1}}
      mutations.setShortBreak(state, 5)
      expect(state.config).toEqual({shortBreak: 5})
    })
  }),
  describe('setLongBreak', () => {
    it('should set the setLongBreak property to 10', () => {
      let state = {config: {longBreak: 1}}
      mutations.setLongBreak(state, 10)
      expect(state.config).toEqual({longBreak: 10})
    })
  }),
  describe('setUser', () => {
    it('should set the setUser property to null', () => {
      let state = {config: {value: null}}
      mutations.setUser(state, null)
      expect(state.config).toEqual({value: null})
    })
  }),
  describe('setConfigRef', () => {
    it('should set the setConfigRef property to null', () => {
      let state = {config: {value: null}}
      mutations.setConfigRef(state, null)
      expect(state.config).toEqual({value: null})
    })
  }),
  describe('setStatisticsRef', () => {
    it('should set the setStatisticsRef property to null', () => {
      let state = {config: {value: null}}
      mutations.setStatisticsRef(state, null)
      expect(state.config).toEqual({value: null})
    })
  }),
  describe('setDisplayName', () => {
    it('should set the SetDisplayName property to an empty string', () => {
      let state = {config: {value: ''}}
      mutations.setDisplayName(state, '')
      expect(state.config).toEqual({value: ''})
    })
  }),
  describe('setWorkoutsRef', () => {
    it('should set the setWorkoutsRef property to null', () => {
      let state = {config: {value: null}}
      mutations.setWorkoutsRef(state, null)
      expect(state.config).toEqual({value: null})
    })
  })
})