import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

process.env.REACT_APP_SHOW_I18N_VIZ = 'true'
