# frozen_string_literal: true

module Resty
  class Response
    delegate :code, to: :response

    def initialize(response)
      @response = response
    end

    def content
      Oj.strict_load(response.body)
    end

    private

    attr_reader :response
  end
end