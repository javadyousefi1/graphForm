// yup
import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

//  use form
import { Controller, useForm } from "react-hook-form";

// rtl mui
import RtlMuiWrapper from "../components/shared/RtlMuiWrapper";
import { TextField } from "@mui/material";

const NewWebServiceForm = () => {
  const defaultValues = {
    title: "",
    baseAddress: "",
    servicProviders: "",
    status: "",
    dateFilter: "",
    requestCount: "",
  };

  //  extract this part
  const schema = yup.object().shape({
    title: yup.string().required("نوشتن عنوان الزامی است"),
    baseAddress: yup.string().required("نوشتن آدرس پایه الزامی است"),
    servicProviders: yup.string().required("انتخاب سرویس دهنده الزامی است"),
    status: yup.string().required("انتخاب وضعیت الزامی است"),
    dateFilter: yup.string().required("انتخاب تاریخ الزامی است"),
    requestCount: yup.number().required("نوشتن تعداد هر فرا خوانی الزامی است"),
  });

  const { control, formState, handleSubmit, setValue } = useForm({
    mode: "onChange",
    defaultValues,
    // resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  return (
    <>
      <RtlMuiWrapper>
        <TextField
          id="outlined-multiline-flexible"
          label="عنوان"
          multiline
          dir="rtl"
          maxRows={4}
        />
      </RtlMuiWrapper>
    </>
  );
};

export default NewWebServiceForm;
