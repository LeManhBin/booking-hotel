import * as yup from 'yup';

const validateMessage = {
    nameRoomValidate: 'please enter name room',
    imageValidate: 'please enter image',
    priceValidate: 'please enter price',
    descValidate: 'please enter description'
}

export const AddRoomFormSchema = yup.object({
    roomName: yup.string().required(validateMessage.nameRoomValidate),
    image: yup.string().required(validateMessage.imageValidate),
    price: yup.string().required(validateMessage.priceValidate),
    desc:  yup.string().required(validateMessage.descValidate),

})