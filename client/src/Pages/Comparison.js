import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #f2f2f2;
  margin-bottom: 20px;
  gap: 10px;
`;

const AspectTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ComparisonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

const ComparisonTitle = styled.h3`
  font-size: 20px;
`;

const ComparisonBar = styled.div`
  height: 20px;
  width: 100%;
  background-color: #ccc;
  border-radius: 10px;
  position: relative;
`;

const ComparisonFill = styled.div`
  height: 100%;
  background-color: #007bff;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
`;

const ComparisonPercentage = styled.p`
  font-size: 18px;
  margin-left: 10px;
`;

const Transperacy = () => {
  return (
    <Container>
      <AspectTitle>Transperacy</AspectTitle>
      <ComparisonContainer>
        <ComparisonTitle>Older Versions</ComparisonTitle>
        <ComparisonBar>
          <ComparisonFill style={{ width: "60%" }} />
        </ComparisonBar>
        <ComparisonPercentage>60%</ComparisonPercentage>
      </ComparisonContainer>
      <ComparisonContainer>
        <ComparisonTitle>New Method</ComparisonTitle>
        <ComparisonBar>
          <ComparisonFill style={{ width: "95%" }} />
        </ComparisonBar>
        <ComparisonPercentage>95%</ComparisonPercentage>
      </ComparisonContainer>
    </Container>
  );
};

const Security = () => {
  return (
    <Container>
      <AspectTitle>Security</AspectTitle>
      <ComparisonContainer>
        <ComparisonTitle>Older Versions</ComparisonTitle>
        <ComparisonBar>
          <ComparisonFill style={{ width: "70%" }} />
        </ComparisonBar>
        <ComparisonPercentage>70%</ComparisonPercentage>
      </ComparisonContainer>
      <ComparisonContainer>
        <ComparisonTitle>New Method</ComparisonTitle>
        <ComparisonBar>
          <ComparisonFill style={{ width: "98%" }} />
        </ComparisonBar>
        <ComparisonPercentage>98%</ComparisonPercentage>
      </ComparisonContainer>
    </Container>
  );
};

const CustomerService = () => {
  return (
    <Container>
      <AspectTitle>Customer Service</AspectTitle>
      <ComparisonContainer>
        <ComparisonTitle>Older Versions</ComparisonTitle>
        <ComparisonBar>
          <ComparisonFill style={{ width: "65%" }} />
        </ComparisonBar>
        <ComparisonPercentage>65%</ComparisonPercentage>
      </ComparisonContainer>
      <ComparisonContainer>
        <ComparisonTitle>New Method</ComparisonTitle>
        <ComparisonBar>
          <ComparisonFill style={{ width: "90%" }} />
        </ComparisonBar>
        <ComparisonPercentage>90%</ComparisonPercentage>
      </ComparisonContainer>
    </Container>
  );
};

const Convenience = () => {
  return (
    <Container>
      <AspectTitle>Convenience</AspectTitle>
      <ComparisonContainer>
        <ComparisonTitle>Older Versions</ComparisonTitle>
        <ComparisonBar>
          <ComparisonFill style={{ width: "50%" }} />
        </ComparisonBar>
        <ComparisonPercentage
        style={{ marginLeft: "10px" }}>50%</ComparisonPercentage>
        </ComparisonContainer>
        <ComparisonContainer>
        <ComparisonTitle>New Method</ComparisonTitle>
        <ComparisonBar>
        <ComparisonFill style={{ width: "85%" }} />
        </ComparisonBar>
        <ComparisonPercentage style={{ marginLeft: "10px" }}>85%</ComparisonPercentage>
        </ComparisonContainer>
        </Container>
        );
        };
        
        const ComparisonPage = () => {
        return (
        <div style={{width: "100%"}}>
        <Transperacy />
        <Security />
        <CustomerService />
        <Convenience />
        </div>
        );
        };
        
        export default ComparisonPage;
