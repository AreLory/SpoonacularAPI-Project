import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Input = () => {
  return (
    <StyledWrapper>
      <div className="input-group">
        <input
          required
          type="text"
          name="text"
          autoComplete="off"
          className="input"
        />
        <label className="user-label">
          <FaSearch />
          Search
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input-group {
    position: relative;
  }

  .input {
    border: solid 1.5px #c4a572;
    border-radius: 1rem;
    background: none;
    padding: 0.6rem 1rem;
    font-size: 1rem;
    color: #c4a572;
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .user-label {
    display: flex;
    align-items: center;
    gap: 6px;
    position: absolute;
    left: 15px;
    top: 0;
    color: #c4a572;
    pointer-events: none;
    transform: translateY(0.7rem);
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    font-sixe: ;
  }

  .input:focus,
  input:valid {
    outline: none;
    border: 1.5px solid #c4a572;
  }

  .input:focus ~ label,
  input:valid ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: #101517;
    padding: 0 0.2em;
    color: #c4a572;
  }
`;

export default Input;
