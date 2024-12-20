import React from "react";
import { Formik, useField } from "formik";
import { TextInput} from "react-native";


export const FormikInputValue = ({name, ...props}) => {
    const [field, meta, helpers] = useField(name)
    return (
        <TextInput
            value={field.value}
            onChangeText={value => helpers.setValue(value)}
            {...props}
        />
    )
}
