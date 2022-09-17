import React, { memo, FC } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

import Header from "../template/Header";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Alert, Typography } from "@mui/material";
import { Box } from "@mui/system";

// 環境変数のセッティング
// デザインの修正
// 送信完了メッセージ

const userID = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

const Contact: FC = memo(() => {
  type Inputs = {
    name: string;
    email: string;
    message: string;
  };

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>({
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (userID && serviceID && templateID) {
      // emailJS初期化
      emailjs.init(userID);
    }
    reset();
    console.log("onSubmit:", data);
    emailjs.send(serviceID, templateID, data, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const validationRules = {
    name: {
      required: "氏名を入力してください",
    },
    email: {
      required: "メールアドレスを入力してください",
    },
    message: {
      required: "お問い合わせ内容を入力してください",
      maxLength: { value: 500, message: "500文字以下で入力してください" },
    },
  };

  return (
    <>
      <Header />
      <Container>
        <Typography my={3} variant="h4" align="center">
          Contact
        </Typography>
        <Box
          component="form"
          sx={{
            width: "70%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            padding: "30px 0",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="name"
            control={control}
            rules={validationRules.name}
            defaultValue=""
            render={({ field, fieldState }) => (
              <TextField
                label="Name"
                variant="outlined"
                {...field}
                error={"name" in errors}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={validationRules.email}
            defaultValue=""
            render={({ field, fieldState }) => (
              <TextField
                label="Mail Address"
                variant="outlined"
                {...field}
                error={"email" in errors}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            rules={validationRules.message}
            defaultValue=""
            render={({ field, fieldState }) => (
              <TextField
                label="Message"
                variant="outlined"
                multiline
                minRows={5}
                {...field}
                error={"message" in errors}
                helperText={fieldState.error?.message}
              />
            )}
          />

          <Button type="submit" variant="outlined" sx={{ width: "20%" }}>
            送信
          </Button>
          {isSubmitSuccessful && (
            <Alert severity="success" color="info">
              送信が成功しました！
            </Alert>
          )}
        </Box>
      </Container>
    </>
  );
});

const Container = styled.div`
  width: 100%;
  padding-top: 64px;
  background-color: white;
`;

export default Contact;
