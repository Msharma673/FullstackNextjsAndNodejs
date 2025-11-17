const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.message || data.error || 'Registration failed',
      };
    }

    return {
      success: true,
      data: data.data,
      message: data.message || 'Registration successful',
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error occurred',
    };
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.message || data.error || 'Login failed',
      };
    }

    return {
      success: true,
      data: data.data,
      message: data.message || 'Login successful',
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error occurred',
    };
  }
};

export const submitFormData = async (formData, token) => {
  try {
    // Log the request details for debugging
    console.log('=== API REQUEST ===');
    console.log('URL:', `${API_URL}/applicants`);
    console.log('Method: POST');
    console.log('Headers:', {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token ? token.substring(0, 20) + '...' : 'NO TOKEN'}`,
    });
    console.log('Body:', formData);
    console.log('==================');

    const response = await fetch(`${API_URL}/applicants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    // Log the response for debugging
    console.log('=== API RESPONSE ===');
    console.log('Status:', response.status);
    console.log('Response:', data);
    console.log('===================');

    if (!response.ok) {
      // Handle validation errors
      if (response.status === 422 && data.details) {
        return {
          success: false,
          error: Array.isArray(data.details) 
            ? data.details.join(', ') 
            : data.message || 'Validation failed',
          details: data.details,
        };
      }

      // Handle unauthorized errors
      if (response.status === 401) {
        return {
          success: false,
          error: 'Unauthorized. Please login again.',
        };
      }

      return {
        success: false,
        error: data.message || data.error || 'Failed to submit form',
      };
    }

    // Backend returns { success: true, message, data }
    return {
      success: true,
      data: data.data || data,
      message: data.message || 'Form submitted successfully',
    };
  } catch (error) {
    console.error('=== API ERROR ===');
    console.error('Error:', error);
    console.error('================');
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error occurred',
    };
  }
};

