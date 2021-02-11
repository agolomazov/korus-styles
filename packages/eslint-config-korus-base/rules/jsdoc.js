module.exports = {
  rules: {
    "require-jsdoc": [
      "error",
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
    "valid-jsdoc": [
      "error",
      {
        prefer: {
          arg: "param",
          argument: "param",
          class: "constructor",
          return: "returns",
          virtual: "abstract",
        },
        requireParamDescription: true,
        requireReturnDescription: true,
        requireParamType: true,
        requireReturnType: true,
        requireReturn: true,
      },
    ],
  },
};
