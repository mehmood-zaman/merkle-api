export const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Merkle-test',
    contact: {},
    version: '1.0',
  },
  servers: [
    {
      url: 'http://localhost:4000/api/v1',
      variables: {},
    },
  ],
  paths: {
    '/movies/search-movies': {
      post: {
        tags: ['Misc'],
        summary: 'Search movies',
        operationId: 'Searchmovies',
        parameters: [
          {
            name: 'x-auth-token',
            in: 'header',
            description: '',
            required: true,
            style: 'simple',
            schema: {
              type: 'string',
              example:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoidGVzdEBtZXJrbGUiLCJwYXNzd29yZCI6IjEyMzQ1Njc4In0sImlhdCI6MTY2NDU1MDQ5N30.h0Y3tdJlZAHfR8XkqJxv2ZydMFlg_6MBdZlqp7bOAsc',
            },
          },
        ],
        requestBody: {
          description: '',
          content: {
            'application/json': {
              schema: {
                allOf: [
                  {
                    $ref: '#/components/schemas/SearchmoviesRequest',
                  },
                  {
                    example: {
                      type: 'movie',
                      title: 'The Shawshank Redemption ',
                      year: '2012',
                    },
                  },
                ],
              },
              example: {
                type: 'movie',
                title: 'The Shawshank Redemption ',
                year: '2012',
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: '',
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    '/auth/sign-in': {
      post: {
        tags: ['Misc'],
        summary: 'Login',
        operationId: 'Login',
        parameters: [],
        requestBody: {
          description: '',
          content: {
            'application/json': {
              schema: {
                allOf: [
                  {
                    $ref: '#/components/schemas/LoginRequest',
                  },
                  {
                    example: {
                      username: 'test@merkle',
                      password: '12345678',
                    },
                  },
                ],
              },
              example: {
                username: 'test@merkle',
                password: '12345678',
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: '',
            headers: {},
          },
        },
        deprecated: false,
      },
    },
  },
  components: {
    schemas: {
      SearchmoviesRequest: {
        title: 'SearchmoviesRequest',
        required: ['type', 'title', 'year'],
        type: 'object',
        properties: {
          type: {
            type: 'string',
          },
          title: {
            type: 'string',
          },
          year: {
            type: 'string',
          },
        },
        example: {
          type: 'movie',
          title: 'The Shawshank Redemption ',
          year: '2012',
        },
      },
      LoginRequest: {
        title: 'LoginRequest',
        required: ['username', 'password'],
        type: 'object',
        properties: {
          username: {
            type: 'string',
          },
          password: {
            type: 'string',
          },
        },
        example: {
          username: 'test@merkle',
          password: '12345678',
        },
      },
    },
  },
  tags: [
    {
      name: 'Misc',
      description: '',
    },
  ],
};
