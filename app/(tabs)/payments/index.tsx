import { StyleSheet } from 'react-native';

import { ThemedText } from '@/src/components/themed-text';
import { ThemedView } from '@/src/components/themed-view';

export default function PaymentsScreen() {
    return (

        <ThemedView style={styles.container}>

            {/* header */}
            <ThemedText type="title">Alertas de Pagos</ThemedText>
            <ThemedText type="default">Configura alertas para pagos de facturas</ThemedText>

        </ThemedView>

    )
}

const styles =  StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
    },

})