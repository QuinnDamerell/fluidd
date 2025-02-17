import type { GetterTree } from 'vuex'
import type { SpoolmanState } from './types'
import type { RootState } from '../types'

export const getters: GetterTree<SpoolmanState, RootState> = {
  getActiveSpool: (state) => {
    return state.availableSpools.find(spool => spool.id === state.activeSpool)
  },

  getActiveSpoolId: (state) => {
    return state.activeSpool
  },

  getAvailableSpools: (state) => {
    return state.availableSpools
  },

  getConnected: (state) => {
    return state.connected
  },

  getAvailable: (state) => {
    return state.connected && state.availableSpools.length
  }
}
