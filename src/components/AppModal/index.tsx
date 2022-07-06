import {Portal} from 'react-native-paper';

export default function AppModal({children}) {
    return (
        <Portal>
            {children}
        </Portal>
    );
}
