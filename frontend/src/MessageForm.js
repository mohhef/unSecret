import React from 'react'
import { useForm } from 'react-hook-form';
import {createMessageRequest} from './fetchRequests';

export default function MessageForm() {
    const {register,handleSubmit} = useForm();

    const onSubmit = (data) => {
      createMessageRequest(JSON.stringify(data));
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            Your secret message
            <input type="textarea" {...register('body', {required:true})}/>
        </label>

        <label>
          Will Disappear After:
          <select {...register('countdown_type')}>
            <option value="1">15s</option>
            <option value="2">1min</option>
            <option value="3">15min</option>
            <option value="4">30min</option>
          </select>
        </label>
        <input type="submit"/>
    </form>
  )
}
