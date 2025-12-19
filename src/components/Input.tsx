import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import type { IInput } from "../types/IInput";

const Input = ({ value, onChange, placeholder, bgColor }: IInput) => {
  return (
    <StyledWrapper $bgColor={bgColor}>
      <div className="input-group">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          type="text"
          name="text"
          autoComplete="off"
          className="input"
        />
        <label className="user-label">
          {placeholder === "Search" ? (
            <>
              <FaSearch />
              {placeholder}
            </>
          ) : (
            <>{placeholder}</>
          )}
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{$bgColor?:string}>`
  .input-group {
    position: relative;
  }

  .input {
    border: solid 1.5px #cafc05;
    border-radius: 1rem;
    background: none;
    padding: 0.6rem 1rem;
    font-size: 1rem;
    color: #cafc05;
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .user-label {
    display: flex;
    align-items: center;
    gap: 6px;
    position: absolute;
    left: 15px;
    top: 0;
    color: #cafc05;
    pointer-events: none;
    transform: translateY(0.7rem);
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    font-sixe: ;
  }

  .input:focus,
  input:valid {
    outline: none;
    border: 1.5px solid #ff6105;
  }

  .input:focus ~ label,
  input:valid ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: ${({ $bgColor }) => $bgColor ?? "transparent"} ;
    padding: 0 0.2em;
    color: #ff6105;
  }
`;

export default Input;
