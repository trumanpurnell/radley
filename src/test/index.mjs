console.log('Hello Nathan, create me\n\n\n')

import { Loop } from '../main/loop'
import config from '../resources/arrow.json'

new Loop({ type: config.FOR_LOOP }).nest({ dims: [3, 4, 5, 2, 6] })
