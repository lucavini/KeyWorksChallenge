import styled from 'styled-components';

export const CardProject = styled.div`
  position: relative;
  width: 320px;
  height: 248px;
  margin-top: 16px;
  padding: 13px 24px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;

  .label {
    color: #00000080;
    font-size: 10px;
    text-transform: capitalize;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .code {
    .code-number {
      color: #000000e6;
      font-size: 12px;
    }
  }
`;

export const Type = styled.span`
  font-size: 11px;
  font-weight: 700;
  padding: 2px;
  border-radius: 3px;
  letter-spacing: 0px;
  color: #00000080;
  border: 1px solid #00000080;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #000000e6;
  text-transform: uppercase;
`;

export const Infos = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .schedule {
    .label {
      text-align: right;
    }
  }

  .project-name {
    color: #000000e6;
    font-size: 14px;
    font-weight: 600;
  }

  .date-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .calendar {
    width: 20px;
    height: 20px;
    margin-bottom: 2px;
  }

  .date {
    font-size: 14px;
    color: #000000e5;
  }
`;

export const Description = styled.div`
  margin-top: 10px;

  p {
    font-size: 12px;
    color: #000000b3;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Following = styled.p`
  position: absolute;
  margin-top: 15px;
  left: 0;
  color: #00000080;
  font-size: 10px;
  text-transform: capitalize;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #0000004d;
  line-height: 0.1em;
  opacity: 0.6;

  span {
    position: absolute;
    left: 24px;
    background: #fff;
    padding: 0 2px;
  }
`;

export const Schedule = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .project {
    text-align: left;

    .label {
      margin-left: 20px;
    }
  }

  .time {
    font-size: 11px;
    display: flex;
    align-items: center;
    .icon {
      width: 11px;
      height: 11px;
      margin-right: 8px;
      fill: ${({ theme }) => theme.palette.secondary.dark};
    }
  }
`;

export const Status = styled.div`
  width: 80px;
  height: 24px;
  margin-top: 3px;
  background: ${({ theme }) => theme.palette.primary.main};
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 3px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  font-weight: 700;
`;

export const Team = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .project {
    text-align: left;

    .label {
      margin-left: 20px;
    }
  }

  .time {
    font-size: 11px;
    display: flex;
    align-items: center;

    span {
      border: 1px solid ${({ theme }) => theme.palette.primary.main};
      border-radius: 3px;
      color: ${({ theme }) => theme.palette.primary.main};
      font-weight: 600;
      font-size: 10px;
      padding: 1px 2px;
    }

    .icon {
      width: 11px;
      height: 11px;
      margin-right: 8px;
      fill: ${({ theme }) => theme.palette.secondary.dark};
    }
  }

  .teams {
    .teams-circles {
      display: flex;
      justify-content: right;
      align-items: center;
    }

    .label {
      text-align: right;
    }
  }
`;

export const TeamCircle = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 5px;
  border-radius: 50px;
  background: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 9px;
    color: #fff;
  }
`;
