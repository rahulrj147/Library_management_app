import axios from 'axios';
import { ADD_MEMBER_SUCCESS, ADD_MEMBER_FAIL } from './actionTypes';

// Add Member
export const addMember = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('http://localhost:5000/api/members', formData, config);

    dispatch({
      type: ADD_MEMBER_SUCCESS,
      payload: res.data,
    });

    alert('Member added successfully!');
  } catch (err) {
    dispatch({
      type: ADD_MEMBER_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    alert('Error adding member.');
  }
};
