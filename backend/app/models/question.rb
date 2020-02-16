class Question < ApplicationRecord
  belongs_to :user
  scope :ask, -> { where(ask: true) }
  scope :dont_ask, -> { where(dont_ask: true) }

  # def self.ask 
  #   where(ask: true)
  # end

  # def self.dont_ask 
  #   where(dont_ask: true)
  # end
end
