# frozen_string_literal: true

module Resty
  module Client
    def initialize(options = {})
      @base_url = options[:base_url]
    end

    def get(path, options = {})
      Response.new(RestClient.get(build_url(path), get_options(options)))
    end

    def post(path, payload, options = {})
      Response.new(RestClient.post(build_url(path), payload, options))
    end

    def put(path, payload, options = {})
      Response.new(RestClient.put(build_url(path), payload, options))
    end

    def patch(path, payload, options = {})
      Response.new(RestClient.patch(build_url(path), payload, options))
    end

    def delete(path, options = {})
      Response.new(RestClient.post(build_url(path), options))
    end

    private

    attr_reader :base_url

    def build_url(path)
      [base_url, path].join
    end

    def get_options(options)
      default_get_options.deep_merge(options.deep_symbolize_keys)
    end

    def default_get_options
      {
        accept: :json
      }
    end
  end
end