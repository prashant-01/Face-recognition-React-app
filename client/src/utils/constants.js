import faceIO from '@faceio/fiojs'

export const faceio = new faceIO(process.env.REACT_APP_PUBLIC_ID)

export const BASE_URL = process.env.REACT_APP_BASE_URL;