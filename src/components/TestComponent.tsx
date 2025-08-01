import React from 'react';

interface TestComponentProps {
  message: string;
}

export const TestComponent: React.FC<TestComponentProps> = ({ message }) => {
  return (
    <div className="p-4 bg-blue-100 rounded">
      <h2 className="text-lg font-bold">Test Component</h2>
      <p>{message}</p>
    </div>
  );
};

export default TestComponent;