import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Box,
  TextField,
  Button,
  CircularProgress,
  Typography,
  Modal,
  Container,
  Paper,
  IconButton,
  Grid,
} from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectUser, setUser } from "../../store/reducers/auth";
import useApiClient from "../../hooks/useApiClient";
import Swal from "sweetalert2";
import { Close } from "@mui/icons-material";

import { useFormik } from 'formik';


import "./settings.scss";
import ChangePasswordForm from "../../components/forms/ChangePasswordForm";

const url = import.meta.env.VITE_APP_API_URL;



const AccSettings = () => {
  const user = useAppSelector(selectUser);
  const userId = user?._id;
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [userDetails, setUserDetails] = useState({
    id: userId,
    name: user?.fullname,
    email: user?.email,
  });

  const client = useApiClient();
  const dispatch = useAppDispatch();

  const fetchUserDetails = useCallback(async () => {
    if (userId) {
      try {
        setLoading(true);
        const response = await axios.get(`${url}users/find/${userId}`);
        // console.log("Data available:", response.data);
        setUserDetails({
          id: response.data._id,
          name: response.data.fullname,
          email: response.data.email,
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    }
  }, [userId]);

  useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name cannot be left blank"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email cannot be left blank"),
  });

  const changePassValidationSchema = Yup.object({
    currentPassword: Yup.string().required('Current password is required'),
    newPassword: Yup.string()
      .required('New password is required')
      .min(6, 'New password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
  })

  const changePassFormik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: changePassValidationSchema,
    onSubmit: (values) => {
      // Submit form data to the server
      console.log("change pass ", values);
    }
  })

  const handleSubmitUserDetails = async (
    values,
    { resetForm, setSubmitting }
  ) => {
    setLoading(true);
    try {
      const res = await axios.put(`${url}users/updateUserDetails/${userId}`, {
        id: userId,
        name: values.name,
        email: values.email,
      });
      setUserDetails({
        id: res.data._id,
        name: res.data.fullname,
        email: res.data.email,
      });
      dispatch(
        setUser({ ...user, fullname: res.data.fullname, email: res.data.email })
      );
      localStorage.setItem("user", JSON.stringify(res.data));
      alert("Details Updated Successfully");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  const onDeleteAccount = () => {
    setDeleteLoading(true);
    client
      .deleteUser(user?._id)
      .then(() => {
        setDeleteLoading(false);
        Swal.fire({
          title: "",
          text: "Subscription canceled and account deleted successfully.",
          icon: "success",
          timer: 1500,
        }).then(function () {
          dispatch(setUser(null));
          window.location.href = "/";
        });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: "Error",
          icon: "error",
          text: "Failed - try again later",
        });
      });
  };

  const renderDeleteModal = () => {
    return (
      <Modal
        open={deleteAccount}
        onClose={() => setDeleteAccount(false)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container
          sx={{
            // padding: 2,
            maxWidth: 600,
            margin: "auto",
            borderRadius: 3,
            position: "relative",
          }}
        >
          <Paper sx={{ color: "#000", padding: 5 }}>
            <Typography variant="h6">
              Delete account and cancel subscription
            </Typography>
            <p style={{ marginBottom: 50 }}>
              Are you sure to cancel your subscription and delete your account ?
            </p>
            <IconButton
              edge="end"
              color="inherit"
              //onClick={handleCloseModal}
              onClick={() => setDeleteAccount(false)}
              aria-label="close"
              style={{ position: "absolute", top: 0, right: 35 }}
            >
              <Close />
            </IconButton>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setDeleteAccount(false)}
                className="gradientButton"
                sx={{ color: "#fff" }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onDeleteAccount()}
                style={{ marginLeft: 10 }}
                className="gradientButton"
                sx={{ color: "#fff" }}
              >
                {deleteLoading ? <CircularProgress size={24} /> : "Delete"}
              </Button>
            </Grid>
          </Paper>
        </Container>
      </Modal>
    )
  }

  return (
    <>
      <Navbar />
      <Box
        style={{
          marginTop: "20vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          style={{ fontWeight: 700 }}
          sx={{ mt: 4, mb: 2, color: "#fff" }}
        >
          Update Account Details
        </Typography>

        <Formik
          initialValues={userDetails}
          validationSchema={validationSchema}
          onSubmit={handleSubmitUserDetails}
        >
          {({ isSubmitting }) => (
            <Form
              style={{
                maxWidth: "450px",
                width: "100%",
                background: "#fff",
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Field
                as={TextField}
                fullWidth
                id="name"
                name="name"
                label="Name"
                margin="normal"
                variant="outlined"
              />

              <Field
                as={TextField}
                fullWidth
                id="email"
                name="email"
                label="E-mail"
                margin="normal"
                variant="outlined"
              />

              <Button
                className="gradientButton"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ backgroundColor: "#1976d2" }}
                disabled={isSubmitting || loading}
                sx={{ mt: 2, mb: 2 }}
              >
                {loading ? <CircularProgress size={24} /> : "Save Changes"}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>

      <div className='w-full flex justify-center'>
        <div className='w-[fit-content]'>
          <ChangePasswordForm
            formik={changePassFormik}
          />
        </div>
      </div>




      <div
        className="fixed bottom-[10px] right-0 left-0 flex justify-center"
      >
        <Button
          className="gradientButton"
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{ backgroundColor: "#1976d2" }}
          sx={{ maxWidth: 450 }}
          onClick={() => {
            setDeleteAccount(true);
          }}
        >
          Cancel subscription and delete account
        </Button>
      </div>

      {renderDeleteModal()}
    </>
  );
};

export default AccSettings;
