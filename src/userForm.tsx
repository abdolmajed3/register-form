import { FormWrapper } from "./formWrapper";

export function UserForm() {
    return (
        <FormWrapper title="User Details">
            <label>FIrst Name</label>
            <input autoFocus required type="text" />
            <label>Last Name</label>
            <input required type="text" />
            <label>Age</label>
            <input required min={1} type="number" />
        </FormWrapper>
    )
}