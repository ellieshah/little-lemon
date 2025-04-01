jest.mock('@chakra-ui/react', () => {
    const originalModule = jest.requireActual('@chakra-ui/react');
    return {
      ...originalModule,
      ChakraProvider: ({ children }) => children,
    };
  });