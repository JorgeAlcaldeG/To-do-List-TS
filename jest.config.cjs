module.exports = {
    testEnvironment: 'jsdom', // necesario para testear componentes React
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'], // inicializa jest-dom, etc.
    moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp)$': '<rootDir>/__mocks__/fileMock.js',
    },
    transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};