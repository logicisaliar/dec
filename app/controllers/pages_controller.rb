class PagesController < ApplicationController
  def home
  end

  def contactus
  end

  def about
  end

  def image_set_tag(source, srcset = {}, options = {})
    srcset = srcset.map { |src, size| "#{path_to_image(src)} #{size}" }.join(', ')
    image_tag(source, options.merge(srcset: srcset))
  end
  # def mobile_device?
  #   if session[:mobile_param]
  #     session[:mobile_param] == "1"
  #   else
  #     request.user_agent =~ /Mobile|webOS/
  #   end
  # end
end
