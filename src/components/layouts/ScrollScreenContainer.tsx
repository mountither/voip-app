import React, { ComponentProps, ReactNode, useState } from 'react'
import { ScrollView, View, Text, ScrollViewProps } from 'react-native';
import tw from 'twrnc';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import OngoingCallStatusBar from '../OngoingCallStatusBar';
import auth from '@react-native-firebase/auth';

const ScrollScreenContainer = ({ children, props }: { children: ReactNode, props?: ScrollViewProps}) => {

    const insets = useSafeAreaInsets();


    return (
        <ScrollView style={tw`mt-${insets.top}px`} contentContainerStyle={tw` px-5`} stickyHeaderIndices={[0]}
        {...props}
        >
            <OngoingCallStatusBar/>
            <View style={tw`mt-5`}>
            {children}
            </View>
        </ScrollView>
    )
}

export default ScrollScreenContainer;