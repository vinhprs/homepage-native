import {
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    Button,
    Pressable,
} from 'react-native';
import { styled } from "nativewind";
import React from 'react';
import { color } from 'react-native-reanimated';

const { width, height } = Dimensions.get('screen');


const StyledView = styled(View);
const StyledImage = styled(Image);
const SlideItem = ({ item, props }: any) => {
    return (
        <StyledView style={styles.container}>
            {
                item.id == 3 && <StyledView>
                    <Text style={styles.nextButton}>Bỏ Qua</Text>
                </StyledView>
            }

            <Animated.Image source={item.img} resizeMode="contain" style={[
                styles.image
            ]} />

            <StyledView style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </StyledView>


            {
                item.id == 3 && <StyledView style={styles.authen}>
                    <Pressable style={styles.signUpButton}>
                        <Text style={styles.signUPText}>Đăng kí</Text>

                    </Pressable>
                    <Pressable style={styles.signInButton} >
                        <Text style={styles.signInText} >Đăng nhập</Text>

                    </Pressable>
                </StyledView>
            }



        </StyledView>

    );

};

export default SlideItem

const styles = StyleSheet.create({
    container: {
        width,
        height,
        position: 'relative',
        alignItems: 'center',
        backgroundColor: '#1F1F39'
    },
    image: {
        flex: 0.4,
        width: '80%',
        marginTop: 50
    },
    content: {
        flex: 0.4,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        color: '#fff',
    },
    description: {
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        textAlign: 'center',
        color: '#fff'
    },
    nextButton: {
        position: 'absolute',
        top: 50,
        left: 100,
        color: '#fff',
        fontSize: 16,
    },
    authen: {
        // flex: 0.1,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    signUpButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 45,
        marginRight: 20,
        borderRadius: 8,

        backgroundColor: '#FF4105',
        color: 'white',
    },
    signInButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 35,
        marginLeft: 20,
        borderRadius: 8,

        backgroundColor: '#fff',
    },
    signUPText: {
        fontSize: 16,
        letterSpacing: 0.25,
        color: '#fff'
    },
    signInText: {
        fontSize: 16,
        letterSpacing: 0.25,
        color: '#FF4105'

    },
});