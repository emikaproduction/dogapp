import React from 'react';
import { ErrorBannerStyled } from './errorBannerStyles';

const ErrorBanner = ({ message }) => <ErrorBannerStyled>{message}</ErrorBannerStyled>;

export default ErrorBanner;
