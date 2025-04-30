export const API_SUCCESS_MESSAGES = {
  AUTH: {
    LOGIN: 'Login Successfully',
    LOGOUT: 'Logout Successfully',
    REFRESH_TOKEN: 'Token Issued!',
    RESET:
      'An OTP has been sent to your inbox if an account is associated with this email.',
    VERIFY_OTP: 'OTP verified successfully. You can now reset your password.',
    RESET_PASSWORD: 'Password reset successfully',
  },
  USERS: {
    FIND_ALL: 'Users fetched successfully',
    FIND_ONE: 'User fetched successfully',
    CREATE: 'User created successfully',
    UPDATE: 'User updated successfully',
    DELETE: 'User deleted successfully',
    PROFILE_ME: 'User profile fetched successfully',
    UPDATE_PROFILE: 'User profile updated successfully',
  },
} as const;

export const API_ERROR_MESSAGES = {
  AUTH: {
    UNAUTHORIZED: 'Unauthorized',
    TOKENS_NOT_MATCHED: 'Tokens not matched!',
    TOKEN_ALREADY_EXISTS: 'Token already exists',
    REFRESH_TOKEN_EXPIRED: 'Please logout your application',
    INVALID_TOKEN: 'Invalid Token.',
    SESSION_EXPIRED: 'Your session has been expired. Please login again.',
  },
} as const;
